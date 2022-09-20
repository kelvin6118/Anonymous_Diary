interface Comment{
    date: string;
    comment: string;
}

export interface Emoji{
    happy: number;
    like: number;
    love: number;
}

export interface Diary {
    id?: string;
    title: string;
    giphy: string;
    description: string;
    comments: Comment[];
    emoji: emoji;
}
