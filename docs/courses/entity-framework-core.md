---
layout: Course
title: Entity Framework Core 8.0
weight: 10
tagline: Ujarzmij dostęp do bazy danych. Wygodnie i wydajnie.
slug: ef-core-8
image: images/course-tiles/netcore.jpg
author: Marcin Sulecki
duration: 3
difficulty: 2
category: dotnet
tags:
  - dotnet
  - entity-framework-core
  - orm
  - sql
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi odio rerum aliquam quos voluptatum accusantium suscipit, debitis tempore, assumenda soluta ad aliquid alias voluptates iste similique optio ipsam minima? Doloremque. Animi odio rerum aliquam quos voluptatum accusantium suscipit, debitis tempore dolor sit amet.
outcomes:
 - Confidently build front-end apps with React and TypeScript
 - Build reusable function components
 - Style your components using vanilla CSS, CSS modules, and CSS-in-JS
 - Use VSCode shortcuts to increase your productivity
 - Deploy your React apps
 - Write clean code like a pro
---


* Wprowadzenie
	* ORM
	* DbContext
* Code First
	* Utworzenie kontekstu
	* Wbudowane konwencje
	* Konfiguracja modelu za pomocą atrybutów
	* Konfiguracja modelu za pomocą FluentApi
	* Mapowanie relacji
	* Konfiguracja dziedziczenia
	* Wbudowane konwertery
 	* Tworzenie własnego konwertera
 	* Mapowanie kolumn typu JSON
* Database First
  * Generowanie modelu na podstawie bazy danych
  * Szablony niestandardowe
  * Dostosowanie szablonu (T4)
* Aktualizacja bazy danych (Migracje)
	* Migracje automatyczne
	* Migracje ręczne
 	* Modyfikacja skryptów migracyjnych
 	* Wykluczanie tabel z migracji
	* Tworzenie paczki migracji
* Operacje na danych
	* Dodawanie nowego rekordu
	* Aktualizacja rekordu
	* Usuwanie rekordu
* Pobieranie encji
	* Zachłanne pobieranie encji (Eadger Loading)
	* Dzielenie na kilka zapytań (Split queries)
	* Jawne pobieranie encji (Explicit Loading)
	* Leniwe pobieranie encji (Lazy Loading)
	* Automatyczne pobieranie encji (AutoInclude)
	* Filtrowanie powiązanych encji	
	* Filtrowanie globalne
	* Tagi zapytań
* Zaawansowanie mapowanie tabel
	* Dzielenie tabeli (Table Splitting)
	* Dzielenie encji (Entity Splitting)
* Śledzenie zmian
	* Stany encji
	* Ręczne modyfikowanie stanu encji
	* Automatyczne modyfikacji stanu encji (TrackGraph)
	* Diagnostyka
* Zapisywanie zmian
	* Podstawowe
	* Zapisywanie powiązanych danych
	* Usuwanie kaskadowe
	* Odłączone encje
	* Obsługa transakcji
	* Rozstrzyganie konfliktów współbieżności
	* Zbiorcze modyfikowanie i usuwanie danych
* Surowy SQL
	* Bezpośrednie wykonywanie zapytań SQL
	* Mapowanie widoków SQL
	* Obsługa procedur składowanych (T-SQL)
	* Mapowanie funkcji SQL
* Diagnostyka
	* Logowanie zachowań Entity Framework Core
