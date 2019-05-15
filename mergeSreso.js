const meetings = [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
]

function mergeMeetings(arr) {


    const sortedMeetings = arr.sort((a, b) => {
        return a.startime - b.startTime
    })

    const firstMeeting = [sortedMeetings[0]]


    for (let i = 1; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i];
        const lastMergedMeeting = firstMeeting[firstMeeting.length - 1];

        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
        } else {

            // Add the current meeting since it doesn't overlap
            firstMeeting.push(currentMeeting);
        }
    }

    return firstMeeting


}

mergeMeetings(meetings)