export interface User {
    id: string,
    avatar: string,
    discriminator: string,
    public_flags: number,
    username: string,
    api_key?: APIKey
}

export interface APIKey {
    creator: string,
    is_admin: boolean,
    key: string
}

export interface Link {
    short_code: string,
    long_url: string,
    clicks: number,
    creation_date: Date,
    creator: User,
    notes: string
}

export interface Event {
    id: string,
    title: string,
    date: Date,
    creator: User,
    repeatConfiguration: string
}
