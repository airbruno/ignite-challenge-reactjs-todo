import styles from './TaskInput.module.css';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
>;

export function TaskInput({...rest}: Props) {
  return (
    <input
      className={styles.inputTask}
      type="text"
      placeholder="Adicione uma nova tarefa"
      {...rest}
    />
  );
}