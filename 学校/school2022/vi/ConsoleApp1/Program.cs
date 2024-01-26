using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Peron p1, p2;
            p1 = new Peron();
            p2 = new Peron();
            p1.name = "山田太郎";
            p1.age = 19;
            p1.showAgeAndName();
            p2.showAgeAndName();
            Console.ReadKey();
        }
    }
}
