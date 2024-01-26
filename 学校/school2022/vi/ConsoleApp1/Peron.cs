using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Peron
    {
        public string name = "name";
        public int age = 0;
        public void showAgeAndName()
        {
            Console.WriteLine("名前:{0} 年齢:{1}",name,age);
        }
        public void SetAgeAndName(string name, int age)
        {
            this.name = name;
            this.age = age;
        }
    }


    
}
