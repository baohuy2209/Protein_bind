import ComponentHeader from "@/components/ComponentHeader/ComponentHeader";
import MoleculeBankTable from "@/components/MoleculeBank/MoleculeBankTable";
import DefaultLayout from "@/components/Layout/DefaultLayout";
const MoleculeBankPage = () => {
  return (
    <DefaultLayout>
      <ComponentHeader pageName="Molecule Bank" containActionButton={true} />
      <div className="flex flex-col gap-10">
        <MoleculeBankTable />
      </div>
    </DefaultLayout>
  );
};
export default MoleculeBankPage;
