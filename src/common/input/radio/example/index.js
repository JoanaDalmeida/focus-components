const InputRadio = FocusComponents.common.input.radio.component;

const InputRadioSample = React.createClass({
    /**
    * Render the component.
    * @return {object} React node
    */
    render() {
        return (
            <div>
                <h3>With value : False</h3>
                <div>
                    <InputRadio name="options1" value={false} label="Value False" />
                </div>
                <h3>With value : True</h3>
                <div>
                    <InputRadio name="options2" value={true} label="Value True" />
                </div>
            </div>
        );
    }
});

return <InputRadioSample />;
