using System;

class Class1
{
	static void Class()
	{
		string missatge;

		missatge = Console.ReadLine();

		bool palindrom = true;

		int Llargada = missatge.Length;

		char[] Missatge;
		Missatge = missatge.ToCharArray();

		Console.WriteLine("Llargada string {0}, Llargada char {1}", Llargada, Missatge.Length);
		Console.WriteLine(Missatge[1]);

		for (int i = 0; i <= Llargada - 1; i++)
		{
			if (Missatge[i] == Missatge[Llargada - 1])
			{
				Llargada = Llargada - 1;
			}

			else
			{
				i = Llargada + 1;

				palindrom = false;
			}
		}

		if (palindrom == true)
		{
			Console.WriteLine("El Missatge si es un palindrom");
		}
		else if (palindrom == false)
		{
			Console.WriteLine("El Missatge no es un palindrom");
		}


	}
}
