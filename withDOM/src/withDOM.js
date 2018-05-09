
export class SomeComponent {

    render(props) {
        const {
            id,
            text
        } = props;

        const div = document.createElement('div');
        div.id = id;
        div.appendChild(document.createTextNode(text));

        return div;
    }
}