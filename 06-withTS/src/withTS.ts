

interface PropsOfMyDream {
    readonly id: string,
    readonly text: string
}


export class SomeComponent {

    render(props: PropsOfMyDream): HTMLElement {
        const div: HTMLElement = document.createElement('div');

        div.id = props.id;
        div.appendChild(
            document.createTextNode(props.text)
        );

        return div;
    }

}

