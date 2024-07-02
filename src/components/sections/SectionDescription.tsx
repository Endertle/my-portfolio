type SectionDescriptionProps = {
  name: string;
  description: string;
};

function SectionDescription({ description, name }: SectionDescriptionProps) {
  return (
    <div className="text-center space-y-2">
      <h1 className="font-bold text-4xl">{name}</h1>
      <p className="text-zinc-500">{description}</p>
    </div>
  );
}
export default SectionDescription;
