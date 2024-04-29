using System;

class Program
{
    const int MAX = 100;

    /// <summary>
    /// Calculates the sum of the first n elements in the array.
    /// </summary>
    static int Sum(int[] arr, int n)
    {
        int result = 0;
        for (int i = 0; i < n; i++)
        {
            result += arr[i];
        }
        return result;
    }

    /// <summary>
    /// Reads an integer from the console. If the input is not a valid integer, 
    /// prints an error message and exits the program.
    /// </summary>
    static int ReadIntFromConsole(string errorMessage)
    {
        if (!int.TryParse(Console.ReadLine(), out int result))
        {
            Console.WriteLine(errorMessage);
            Environment.Exit(1);
        }
        return result;
    }

    static void Main()
    {
        Console.Write("Enter the number of elements (1-100): ");
        int n = ReadIntFromConsole("Invalid input. Please provide a digit ranging from 1 to 100.");
        if (n < 1 || n > MAX)
        {
            Console.WriteLine("Invalid input. Please provide a digit ranging from 1 to 100.");
            Environment.Exit(1);
        }

        int[] arr = new int[n];

        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            arr[i] = ReadIntFromConsole("Invalid input. Please enter valid integers.");
        }

        int total = Sum(arr, n);

        Console.WriteLine($"Sum of the numbers: {total}");
    }
}