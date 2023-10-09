"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SubmitForm() {
    const router = useRouter()

    const [title, setTitle] = useState("")
    const [authors, setAuthors] = useState("")
    const [journalName, setJournalName] = useState("")
    const [yearOfPublication, setYearOfPublication] = useState("")
    const [volume, setVolume] = useState("")
    const [number, setNumber] = useState("")
    const [pages, setPages] = useState("")
    const [doi, setDoi] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const article = {
            title,
            authors,
            journalName,
            yearOfPublication,
            volume,
            number,
            pages,
            doi,
        }
    }

    return (
  <form>
    <label>
      Title:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <br />
    <label>
      Authors:
      <input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} />
    </label>
    <br />
    <label>
      Journal Name:
      <input type="text" value={journalName} onChange={(e) => setJournalName(e.target.value)} />
    </label>
    <br />
    <label>
      Year of Publication:
      <input type="text" value={yearOfPublication} onChange={(e) => setYearOfPublication(e.target.value)} />
    </label>
    <br />
    <label>
      Volume:
      <input type="text" value={volume} onChange={(e) => setVolume(e.target.value)} />
    </label>
    <br />
    <label>
      Number:
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
    </label>
    <br />
    <label>
      Pages:
      <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} />
    </label>
    <br />
    <label>
      DOI:
      <input type="text" value={doi} onChange={(e) => setDoi(e.target.value)} />
    </label>
    <br />
    <button type="submit" disabled={isLoading}>
      {isLoading ? "Submitting..." : "Submit"}
    </button>
  </form>
);
}

