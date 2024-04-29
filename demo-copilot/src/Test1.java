class Test1 {
int calculateDaysBetweenDates(int year1, int month1, int day1, int year2, int month2, int day2) {
    int daysInYear1 = calculateDaysInYear(year1, month1, day1);
    int daysInYear2 = calculateDaysInYear(year2, month2, day2);
    int daysBetweenYears = calculateDaysBetweenYears(year1, year2);
    return daysInYear2 - daysInYear1 + daysBetweenYears;
}

int calculateDaysInYear(int year, int month, int day) {
    int days = 0;
    for (int i = 1; i < month; i++) {
        days += calculateDaysInMonth(year, i);
    }
    days += day;
    return days;
}

int calculateDaysInMonth(int year, int month) {
    int days = 0;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        case 2:
            if (isLeapYear(year)) {
                days = 29;
            } else {
                days = 28;
            }
            break;
    }
    return days;
}

int calculateDaysBetweenYears(int year1, int year2) {
    int days = 0;
    for (int i = year1 + 1; i < year2; i++) {
        if (isLeapYear(i)) {
            days += 366;
        } else {
            days += 365;
        }
    }
    return days;
}


  

}