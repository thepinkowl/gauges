interface Action {
    title: string;
    callback: () => void;
};

export class ToastModel {
    title: string;
    duration?: number;
    shown?: Date;
    action?: Action;
}