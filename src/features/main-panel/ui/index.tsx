import {TaskComponent} from "../../task/ui";

export const MainPanel = () => {
    return (
        <section>
            <TaskComponent title={'Test'} description={'Lorem Ipsum'} state={'Doing'} />
        </section>
    )
}