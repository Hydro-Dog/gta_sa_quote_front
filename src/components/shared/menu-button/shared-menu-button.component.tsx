interface MenuButtonProps {
  text: string;
  parentCb: any;
}
export const SharedMenuButton = (props: MenuButtonProps) => {
  return <div onClick={props.parentCb}>{props.text}</div>;
};
