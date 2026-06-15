
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectHeading from "@/components/ProjectHeading";
import ProjectAlbum from "@/components/ProjectAlbum";
import ProjectNavigation from "@/components/ProjectNavigation";
import ProjectOverview from "@/components/ProjectOverview";
import ProjectSidebar from "@/components/ProjectSidebar";
import RelatedProjects from "@/components/RelatedProjects";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <div className="mx-auto max-w-[1140px] px-4 md:px-0">
          <Breadcrumb />
          <ProjectHeading />
          <ProjectAlbum />
        </div>

        <div className="sticky top-[72px] z-40 bg-white">
          <ProjectNavigation />
        </div>

        <div className="mx-auto mt-8 flex max-w-[1140px] flex-col gap-8 px-4 pb-16 md:flex-row md:px-0">
          <div className="flex-1">
            <ProjectOverview />
          </div>
          <aside className="w-full md:w-[363px]">
            <ProjectSidebar />
          </aside>
        </div>

        <div className="bg-white border-t border-gray-100">
          <div className="mx-auto max-w-[1140px] px-4 md:px-0">
            <RelatedProjects />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
