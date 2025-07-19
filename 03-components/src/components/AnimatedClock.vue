<script>
export default {
    props: {
        timeZone: {
            type: String,
            default: 'Europe/Rome'
        },
        label: {
            type: String,
            default: 'Italy'
        },
        hoursBgColor: {
            type: String,
            default: 'bg-neutral'
        },
        minutesBgColor: {
            type: String,
            default: 'bg-neutral'
        },
        secondsBgColor: {
            type: String,
            default: 'bg-neutral'
        },
        hoursTextColor: {
            type: String,
            default: 'text-neutral-content'
        },
        minutesTextColor: {
            type: String,
            default: 'text-neutral-content'
        },
        secondsTextColor: {
            type: String,
            default: 'text-neutral-content'
        },
    },
    data() {
        return {
            currentTime: new Date(new Date().toLocaleString("en-US", { timeZone: this.timeZone })),
        }
    },
    mounted() {
        this.updateTime();
        setInterval(this.updateTime, 1000);
    },
    methods: {
        updateTime() {
            this.currentTime = new Date(new Date().toLocaleString("en-US", { timeZone: this.timeZone }));
        }
    }
}
</script>

<template>
    <div class="p-4 bg-white shadow-md rounded-md">
        <div class="text-center mb-4">
            <h4 class="font-bold text-2xl">{{ label }}</h4>
        </div>
        <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
            <div :class="[hoursBgColor, hoursTextColor]" class="rounded-box flex flex-col p-2">
                <span class="countdown font-mono text-5xl">
                    <span :style="`--value:${currentTime.getHours()}`" aria-live="polite"
                        :aria-label="currentTime.getHours()">
                        {{ currentTime.getHours() }}
                    </span>
                </span>
                hours
            </div>
            <div :class="[minutesBgColor, minutesTextColor]" class="rounded-box flex flex-col p-2">
                <span class="countdown font-mono text-5xl">
                    <span :style="`--value:${currentTime.getMinutes()}`" aria-live="polite"
                        :aria-label="currentTime.getMinutes()">
                        {{ currentTime.getMinutes() }}
                    </span>
                </span>
                min
            </div>
            <div :class="[secondsBgColor, secondsTextColor]" class="rounded-box  flex flex-col p-2">
                <span class="countdown font-mono text-5xl">
                    <span :style="`--value:${currentTime.getSeconds()}`" aria-live="polite"
                        :aria-label="currentTime.getSeconds()">
                        {{ currentTime.getSeconds() }}
                    </span>
                </span>
                sec
            </div>
        </div>
    </div>
</template>
