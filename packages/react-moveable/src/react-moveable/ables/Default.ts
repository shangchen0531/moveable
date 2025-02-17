export default {
    name: "",
    props: {
        target: Object,
        dragTarget: Object,
        container: Object,
        portalContainer: Object,
        rootContainer: Object,
        useResizeObserver: Boolean,
        zoom: Number,
        transformOrigin: Array,
        edge: Object,
        ables: Array,
        className: String,
        pinchThreshold: Number,
        pinchOutside: Boolean,
        triggerAblesSimultaneously: Boolean,
        checkInput: Boolean,
        cspNonce: String,
        translateZ: Number,
        hideDefaultLines: Boolean,
        props: Object,
        flushSync: Function,
    } as const,
    events: {} as const,
};
