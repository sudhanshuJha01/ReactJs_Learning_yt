import { atom, selector } from "recoil";

const networkNotificationAtomCount = atom({
  key: "networkNotificationAtomCount",
  default: 102,
});

const jobsAtomCount = atom({
  key: "jobsAtomCount",
  default: 12,
});

const notificationAtomCount = atom({
  key: "notificationAtomCount",
  default: 9,
});

const messageAtomCount = atom({
  key: "messageAtomCount",
  default: 12,
});

const totalNotificationCount = selector({
  key: "totalNotificationCount",
  get: ({ get }) => {
    const networkCount = get(networkNotificationAtomCount);
    const jobCount = get(jobsAtomCount);
    const notificationCount = get(notificationAtomCount);
    const messageCount = get(messageAtomCount);
    const totalNotificationCount = networkCount+jobCount+notificationCount+messageCount;
    return totalNotificationCount;
  },
});

export {
  networkNotificationAtomCount,
  jobsAtomCount,
  notificationAtomCount,
  messageAtomCount,
  totalNotificationCount
};
