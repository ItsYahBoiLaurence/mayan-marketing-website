import mixpanel from "mixpanel-browser";

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN

mixpanel.init(MIXPANEL_TOKEN as string, { debug: true, track_pageview: true })

export const Mixpanel = {
    track: (event: string, properties: Record<string, unknown> = {}): void => {
        mixpanel.track(event, properties);
    },

    identify: (userId: string): void => {
        mixpanel.identify(userId);
    },

    people: {
        set: (properties: Record<string, unknown>): void => {
            mixpanel.people.set(properties);
        },
    },
}
