interface Comment{
    date: date;
    comment: string;
}

interface emoji{
    happy: number;
    like: number;
    love: number;
}

export interface Diary {
    id: string;
    title: string;
    giphy: string;
    description: string;
    comments: Comment[];
    emoji: emoji;
}
