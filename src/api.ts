export interface Card {
    id: number;
    balance: number;
    cardHolder: string;
    cardNumber: string;
    expiry: string;
    plain: boolean;
}

export interface Transaction {
    id: number;
    description: string;
    date: string;
    amount: number;
    iconName: string;
    classType: string;
}

export interface WeeklyActivityData {
    labels: string[];
    withdrawData: number[];
    depositData: number[];
}

export interface ExpenseStatisticsData {
    labels: string[];
    data: number[];
    backgroundColors: string[];
    offsets: number[];
}

export interface BalanceHistoryData {
    labels: string[];
    data: number[];
}


export const getCards = async (): Promise<Card[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    balance: 5756,
                    cardHolder: "Eddy Cusuma",
                    cardNumber: "3778 **** **** 1234",
                    expiry: "12/22",
                    plain: false,
                },
                {
                    id: 2,
                    balance: 5756,
                    cardHolder: "Eddy Cusuma",
                    cardNumber: "3778 **** **** 1234",
                    expiry: "12/22",
                    plain: true,
                },
            ]);
        }, 500); // Simulate network delay
    });
};

export const getTransactions = async (): Promise<Transaction[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    iconName: "BsWindowStack", // Use string identifiers
                    description: "Deposit from my Card",
                    date: "28 January 2021",
                    amount: -850,
                    classType: "card-deposit",
                    id: 1,
                },
                {
                    iconName: "PiPaypalLogoBold",
                    description: "Deposit Paypal",
                    date: "25 January 2021",
                    amount: 2500,
                    classType: "paypal-deposit",
                    id: 2,
                },
                {
                    iconName: "RiExchangeDollarLine",
                    description: "Jemi Wilson",
                    date: "21 January 2021",
                    amount: 5400,
                    classType: "withdrawal",
                    id: 3,
                },
            ]);
        }, 500);
    });
};

export const getWeeklyActivityData = async (): Promise<WeeklyActivityData> => {
    // I am simulating network latency
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                withdrawData: [400, 100, 150, 200, 250, 200, 150],
                depositData: [300, 200, 300, 400, 480, 400, 300],
            });
        }, 500);
    });
};

export const getExpenseStatisticsData = async (): Promise<ExpenseStatisticsData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                labels: ["Entertainment", "Bill Expense", "Others", "Investment"],
                data: [30, 15, 35, 20],
                backgroundColors: ["#343C6A", "#FC7900", "#232323", "#396AFF"],
                offsets: [30, 40, 10, 0],
            });
        }, 500);
    });
};

export const getBalanceHistoryData = async (): Promise<BalanceHistoryData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
                data: [200, 400, 300, 700, 500, 600, 700],
            });
        }, 500);
    });
};
