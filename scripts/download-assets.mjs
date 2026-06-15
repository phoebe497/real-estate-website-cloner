import fs from 'fs';
import https from 'https';
import path from 'path';

const assets = [
  {
    url: 'https://vinhomes.vn/themes/custom/vinhomes/logo.png', // Just an example, need actual ones from research
    name: 'logo.png'
  },
  {
    url: 'https://file4.batdongsan.com.vn/2021/06/24/20210624105205-58e5_wm.jpg',
    name: 'listing-1.jpg'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function run() {
  const dir = 'public/images';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  for (const asset of assets) {
    console.log(`Downloading ${asset.name}...`);
    try {
      await download(asset.url, path.join(dir, asset.name));
    } catch (e) {
      console.error(`Failed to download ${asset.name}: ${e.message}`);
    }
  }
}

run();
