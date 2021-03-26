import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    /**
     * @track indicates that if this object changes,
     * the UI should update to reflect those changes.
     */
    @track
    title = 'Welcome to Lightning Web Components Playground!';

    @track
    showFeatures = true;

    /**
     * Getter for the features property
     */
    get features() {
        return [
            {
                label: 'Learn in the browser.',
                icon: 'utility:edit',
            },
            {
                label: 'View changes to code instantly with Live Compilation.',
                icon: 'utility:refresh',
            },
            {
                label: 'Style your components with SLDS.',
                icon: 'utility:brush',
            },
        ];
    }
}
