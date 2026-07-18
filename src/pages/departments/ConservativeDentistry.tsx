import DepartmentHero from "../../components/Department/DepartmentHero";
import DepartmentOverview from "../../components/Department/DepartmentOverview";
import DepartmentHighlights from "../../components/Department/DepartmentHighlights";
import DepartmentFacilities from "../../components/Department/DepartmentFacilities";
import DepartmentLab from "../../components/Department/DepartmentLab";
import DepartmentFaculty from "../../components/Department/DepartmentFaculty";
import DepartmentResearch from "../../components/Department/DepartmentResearch";
import DepartmentPublications from "../../components/Department/DepartmentPublications";
import DepartmentAwards from "../../components/Department/DepartmentAwards";
import DepartmentEvents from "../../components/Department/DepartmentEvents";

export default function ConservativeDentistry() {
  return (
    <>
      <DepartmentHero />
      <DepartmentOverview />
      <DepartmentHighlights />
      <DepartmentFacilities />
      <DepartmentLab />
      <DepartmentFaculty />
      <DepartmentResearch />
      <DepartmentPublications />
      <DepartmentAwards />
      <DepartmentEvents />
    </>
  );
}