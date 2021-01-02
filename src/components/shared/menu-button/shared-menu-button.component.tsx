interface MenuButtonProps {
  text: string;
}
export const SharedMenuButton = (props: MenuButtonProps) => {
  return <div>{props.text}</div>;
};
