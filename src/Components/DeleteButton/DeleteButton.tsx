import "./DeleteButton.scss";

interface DeleteButtonProps {
  className: string;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function DeleteButton({
  className,
  handleDelete,
}: DeleteButtonProps) {
  return (
    <button className={className} onClick={handleDelete}>
      X
    </button>
  );
}
