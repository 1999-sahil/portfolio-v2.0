import { items } from "@/constants";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
  

const ProjectCard = () => {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={item.header}
        tag={item.tag}
        link={item.link}
        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
    />
      ))}
    </BentoGrid>
  );
}

export default ProjectCard
