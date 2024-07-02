type BasicInfoCardProps = {
  title: string;
  content: string;
};

function AboutMeInfoCard({ title, content }: BasicInfoCardProps) {
  return (
    <div className="lg:max-w-xl">
      <h3 className="font-bold">{title}</h3>
      <p className="text-zinc-500">{content}</p>
    </div>
  );
}
export default AboutMeInfoCard;
