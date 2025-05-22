export type WorkItemModel = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repository?: string;
};

export type WorkSectionProps = {
  item: WorkItemModel;
  index: number;
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
};
