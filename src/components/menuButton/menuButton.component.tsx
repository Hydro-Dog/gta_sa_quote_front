interface MenuButtonProps {
  text: string;
}
export const MenuButton = (props: MenuButtonProps) => {
  return <div>{props.text}</div>;
};
