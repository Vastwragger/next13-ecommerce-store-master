import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="relative aspect-square md:aspect-[3/1.88] bg-no-repeat overflow-hidden bg-contain">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
        </div>
      </div>
    </div>
   );
};

export default Billboard;
