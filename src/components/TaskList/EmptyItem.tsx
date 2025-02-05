import styles from './EmptyItem.module.css';
import clipboard from '../../assets/clipboard.png';

export function EmptyItem() {
  return (
    <div className={styles.container}>
      <img src={clipboard} alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}