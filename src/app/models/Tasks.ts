export interface Tasks {
    id: number,
    event: string,
    lang: string,
    title: string,
    mainSpeaker: string,
    otherSpeakers: string[],
    talkType: {
        id: number,
        label: string, 
    },
    audienceLevel: string,
    summary: string,
    privateMessage: string,
    state: {
        code: string
        },
        sponsorTalk: boolean,
        track: {
            id: number,
            label: string,
        },
    demoLevel: string,
    preferences: string


  }