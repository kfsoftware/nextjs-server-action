"use server"
import 'server-only'


import { getDataSource, Counter } from "./db"

export async function increaseCounter() {
    const db = await getDataSource()
    const counterRepo = db.getRepository(Counter)
    const counter = await counterRepo.findOneBy({
      id: "default"
    })
    if (!counter) {
      const newCounter = new Counter()
      newCounter.id = "default"
      newCounter.value = 1
      await counterRepo.save(newCounter)
      return newCounter.value
    }
    counter.value++
    await counterRepo.save(counter)
    return counter.value

  }
  export async function getCurrentCounter() {
    const db = await getDataSource()
    const counterRepo = db.getRepository(Counter)
    const counter = await counterRepo.findOneBy({
      id: "default"
    })
    if (!counter) {
      const newCounter = new Counter()
      newCounter.id = "default"
      newCounter.value = 1
      await counterRepo.save(newCounter)
      return newCounter.value
    }
    return counter.value
  }