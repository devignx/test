"use client";

import { useClickOutside } from "@mantine/hooks";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Animated from "./animate";

// Define the MONTHS and DAYS arrays
const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [searchText, setSearchText] = useState("");
    const [monthOpen, setMonthOpen] = useState(false);
    const [yearOpen, setYearOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(
        selectedDate.getFullYear()
    );
    const [highlightStyle, setHighlightStyle] = useState({});

    const yearRef = useRef(null);

    const ref = useClickOutside(() => {
        setMonthOpen(false);
        setYearOpen(false);
    });

    const handleMonthChange = useCallback(
        (value) => {
            const newDate = new Date(
                selectedYear,
                value,
                selectedDate.getDate()
            );
            setSelectedDate(newDate);
            setSelectedMonth(value);
            setSearchText("");
        },
        [selectedDate, selectedYear]
    );

    const handleYearChange = useCallback(
        (value) => {
            const newDate = new Date(
                value,
                selectedMonth,
                selectedDate.getDate()
            );
            setSelectedDate(newDate);
            setSelectedYear(value);
            setSearchText("");
        },
        [selectedDate, selectedMonth]
    );

    const handlePrevMonth = useCallback(() => {
        const newDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth() - 1,
            selectedDate.getDate()
        );
        setSelectedDate(newDate);
        setSelectedMonth(newDate.getMonth());
        setSelectedYear(newDate.getFullYear());
    }, [selectedDate]);

    const handleNextMonth = useCallback(() => {
        const newDate = new Date(
            selectedDate.getFullYear(),
            selectedDate.getMonth() + 1,
            selectedDate.getDate()
        );
        setSelectedDate(newDate);
        setSelectedMonth(newDate.getMonth());
        setSelectedYear(newDate.getFullYear());
    }, [selectedDate]);

    const filteredMonths = useMemo(
        () =>
            MONTHS.filter((month) =>
                month.toLowerCase().includes(searchText.toLowerCase())
            ),
        [searchText]
    );

    const filteredYears = useMemo(() => {
        const startYear = selectedYear - 100;
        const endYear = selectedYear + 100;
        return Array.from(
            { length: endYear - startYear + 1 },
            (_, i) => startYear + i
        ).filter((year) => year.toString().includes(searchText));
    }, [selectedYear, searchText]);

    const firstDayOfMonth = useMemo(
        () =>
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth(),
                1
            ).getDay(),
        [selectedDate]
    );
    const daysInMonth = useMemo(
        () =>
            new Date(
                selectedDate.getFullYear(),
                selectedDate.getMonth() + 1,
                0
            ).getDate(),
        [selectedDate]
    );

    const calendarDays = useMemo(() => {
        const days = Array(firstDayOfMonth).fill(null);
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    }, [firstDayOfMonth, daysInMonth]);

    useEffect(() => {
        const day = selectedDate.getDate();
        const index = firstDayOfMonth + day - 1;
        const row = Math.floor(index / 7);
        const col = index % 7;
        setHighlightStyle({
            top: `${row * 3 + 2.5}rem`,
            left: `${col * 3}rem`,
        });
    }, [selectedDate, firstDayOfMonth]);

    useEffect(() => {
        if (yearOpen && yearRef.current) {
            const currentYearElement = yearRef.current.querySelector(
                `[data-year="${selectedYear}"]`
            );
            if (currentYearElement) {
                currentYearElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [yearOpen, selectedYear]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            setYearOpen(false);
        }
    };

    return (
        <>
            <div className="bg-zinc-900/50 backdrop-blur-xl z-40 rounded-lg w-11/12 md:w-fit p-6 max-w-md flex flex-col gap-6">
                <div className="flex items-center gap-6 justify-between">
                    <div className="flex items-center gap-4">
                        <div
                            onClick={() => setMonthOpen(!monthOpen)}
                            className="relative w-36"
                        >
                            <input
                                type="text"
                                placeholder="Month"
                                key={MONTHS[selectedMonth]}
                                defaultValue={MONTHS[selectedMonth]}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="pr-8 pl-4 w-full p-2 rounded-full bg-zinc-900 text-white"
                            />
                            <div className="absolute cursor-pointer right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400">
                                <ChevronDown
                                    size={16}
                                    className={`anim ${
                                        monthOpen ? "-scale-y-100" : ""
                                    }`}
                                />
                            </div>
                            <Animated
                                isVisible={monthOpen}
                                ref={ref}
                                className="absolute top-full left-0 z-[999] w-full bg-zinc-900 drop-shadow-xl rounded-md shadow-lg mt-1 max-h-48 overflow-auto"
                            >
                                {filteredMonths.map((month, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 hover:bg-zinc-700 cursor-pointer text-white"
                                        onClick={() =>
                                            handleMonthChange(
                                                MONTHS.indexOf(month)
                                            )
                                        }
                                    >
                                        {month}
                                    </div>
                                ))}
                            </Animated>
                        </div>
                        <div
                            onClick={() => setYearOpen(!yearOpen)}
                            className="relative w-24"
                        >
                            <input
                                type="text"
                                key={selectedYear}
                                placeholder="Year"
                                defaultValue={selectedYear}
                                onChange={(e) => setSearchText(e.target.value)}
                                className="pr-8 pl-4 w-full p-2 rounded-full bg-zinc-900 text-white"
                            />
                            <div className="absolute cursor-pointer right-3 top-1/2 transform drop-shadow-xl -translate-y-1/2 w-4 h-4 text-zinc-400">
                                <ChevronDown
                                    size={16}
                                    className={`anim duration-500 ${
                                        yearOpen ? "-scale-y-100" : ""
                                    }`}
                                />
                            </div>
                            <Animated
                                isVisible={yearOpen}
                                ref={ref}
                                className="absolute top-full anim left-0 z-[999] w-full bg-zinc-900 rounded-md shadow-lg mt-1 max-h-64 overflow-auto"
                            >
                                <div ref={yearRef}>
                                    {filteredYears.map((year, index) => (
                                        <div
                                            key={index}
                                            data-year={year}
                                            className="px-4 py-2 hover:bg-zinc-700 cursor-pointer text-white"
                                            onClick={() =>
                                                handleYearChange(year)
                                            }
                                        >
                                            {year}
                                        </div>
                                    ))}
                                </div>
                            </Animated>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileTap={{ x: -4 }}
                            className="bg-transparent p-2 rounded-full hover:text-zinc-400 text-white"
                            onClick={handlePrevMonth}
                        >
                            <ChevronDown className="rotate-90" />
                        </motion.button>
                        <motion.button
                            whileTap={{ x: 4 }}
                            className="bg-transparent p-2 rounded-full hover:text-zinc-400 text-white"
                            onClick={handleNextMonth}
                        >
                            <ChevronDown className="-rotate-90" />
                        </motion.button>
                    </div>
                </div>

                <div className="grid grid-cols-7 mx-auto relative w-fit gap-2">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                            width: `2.5rem`,
                            height: `2.5rem`,
                            transition:
                                "top 0.5s cubic-bezier(.44,-0.01,0,.99), left 0.5s cubic-bezier(.44,-0.01,0,.99)",
                            ...highlightStyle,
                        }}
                        className="absolute bg-zinc-200 z-10 mix-blend-difference pointer-events-none rounded-full"
                    />
                    {DAYS.map((day, index) => (
                        <div
                            key={index}
                            className="text-center mb-4 uppercase text-xs font-medium text-zinc-500"
                        >
                            {day}
                        </div>
                    ))}
                    {calendarDays.map((day, index) => (
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            key={index}
                            onClick={() =>
                                day &&
                                setSelectedDate(
                                    new Date(selectedYear, selectedMonth, day)
                                )
                            }
                            className={`bg-transparent rounded-full pt-[1px] w-10 h-10 text-center flex items-center justify-center text-zinc-300 ${
                                day === selectedDate.getDate()
                                    ? "text-white"
                                    : ""
                            } ${
                                !day
                                    ? "bg-transparent pointer-events-none"
                                    : "bg-zinc-800 hover:bg-zinc-700"
                            }`}
                        >
                            {day}
                        </motion.button>
                    ))}
                </div>
            </div>
            <p className="text-zinc-500 font-thin whitespace-nowrap text-9xl fixed bottom-24 left-1/2  -translate-x-1/2">
                {selectedDate.toDateString()}
            </p>
        </>
    );
}
