---
title:  Sample Cron Schedules
lastmod: 2019-04-20T07:41:02-07:00
publishdate: 2019-04-08T07:41:02-07:00
author: Gautam Ankoji
draft: false
description: Explore various examples of cron expressions for setting up time schedules and cronjobs.
tags: 
    - node
    - linux

type: lessons
---

[Cron](https://en.wikipedia.org/wiki/Cron) is a persistent process utilized on Linux servers, operating at specific times according to the crontab pattern (with a minimum granularity of 1 minute). It is employed for configuring *cronjobs*, background tasks executed at predetermined times or intervals. Additionally, Firebase now features a [time-triggered](https://firebase.googleblog.com/2019/04/schedule-cloud-functions-firebase-cron.html) Cloud Function that can be configured with crontab. The following guide illustrates how to schedule cronjobs in this format.

Tip: Instead of memorizing all examples below, consider using the [Crontab Guru](https://crontab.guru/every-weekday) app for reference.

## Understanding Crontab

A cron schedule is delineated by configuring values in five slots `* * * * *`. Each slot may contain a single number, range of numbers, or the `*` wildcard. These slots are:

1. **Minute** (0-59) - Minute of the hour
2. **Hour**	(0-23) - Hour of the day
3. **Day**	(1-31)	- Day of the month
4. **Month** (1-12) - Month of the year
5. **Weekday** (0-6) - Day of the week (Sunday == 0, Monday == 1, ..., Saturday == 6)
6. Script to execute (not applicable for Cloud Functions)

## Example Schedules

The following examples demonstrate how to configure crontab for common use-cases.

### Every Minute

To execute a cronjob every minute, utilize wildcard `*` for all values.

```text
* * * * *
```

### Every 15 Minutes

Utilize the slash `/` for step values, executing the job every N steps.

```text
*/15 * * * *
```

### Daily at 5:30 AM

Schedule a task to run daily by specifying minute and hour values.

```text
30 5 * * *
```

For 5:30 PM, add 12 hours.

```text
30 17 * * *
```

### Twice Daily at 10AM & 10PM

Separate values by commas to execute at multiple times.

```text
0 10,22 * * *
```

### Mondays & Wednesdays at 8PM

Execute jobs on specific days of the week using the last slot.

```text
0 20 * * 1,3
```

### Every 5 Minutes from 9AM to 5PM, Monday through Friday

Configure ranges for hour and weekday values using dashes.

```text
*/5 9-17 * * 1-5
```
