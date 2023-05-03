import { useState, useEffect } from "react"
import { differenceInSeconds, parse, startOfWeek } from "date-fns"

const renderHook = () => {
  const [stats, setStats] = useState({
    streamersLive: 0,
    totalDays: 0,
    totalHours: 0,
    totalMinutes: 0,
  })

  useEffect(() => {
    fetch("https://livecoders-heatmap.netlify.app/data.json")
      .then((resp) => resp.json())
      .then((data) => {
        /*
        The structure of the json is an object where keys are the usernames and
        the values are stream objects. By writing Object.entries, I can reduce so
        it is just an array of all of the values.
        */
        data = Object.entries(data)
          .reduce((acc, curr) => {
            acc.push(...curr[1])
            return acc
          }, [])
          .filter(
            /* Now filter down so it grabs all streams that end during this week */
            (stream) =>
              differenceInSeconds(
                parse(
                  stream.endTime,
                  "EEE, LLL d, yyyy h:mm bbb xx",
                  new Date()
                ),
                startOfWeek(new Date())
              ) > 0
          )

        let totalSeconds = data.reduce((acc, curr) => acc + curr.length, 0)
        let totalMinutes = Math.floor(totalSeconds / 60)
        let totalHours = Math.floor(totalMinutes / 60)
        let totalDays = Math.floor(totalHours / 24)

        let amtStreamers = [...new Set(data.map((stream) => stream.streamer))]
          .length

        setStats({
          streamersLive: amtStreamers,
          totalDays,
          totalHours,
          totalMinutes,
        })
      })
  }, [])

  return stats
};
export default renderHook;
