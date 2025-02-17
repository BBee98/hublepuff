import {Task} from "../domain/task.ts";
import {Card } from "../../../../ui/card/Card.tsx";

import styles from './index.module.css';

export const TaskComponent = ({ title, state }: Task) => {
    return (<Card>
        <h1 className={styles.title}>{ title }</h1>
        <p>{ state }</p>
    </Card>)
}