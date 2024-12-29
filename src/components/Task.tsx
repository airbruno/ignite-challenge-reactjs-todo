import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';

export function Task() {
  return (
      <li className={styles.task}>
        <input type="checkbox" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
        <a><Trash size ={24}  color="#808080" /></a>
      </li>
  )
}