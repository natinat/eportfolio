library(readr) #To import csv
library(dplyr) #To use the pipe operator

read_csv("train.csv")
df <- data.frame(read_csv("train.csv"))
head(df)

#I have created a minimised version of the datset with Furniture and Technology under the category column, 
#I then group the Category data by Customer ID and summarise by the sum of Sales
filtered_sales <- df %>%
  filter(Category %in% c("Furniture", "Technology")) %>%
  group_by(Customer.ID, Category) %>%
  summarise(Sales= sum(Sales), .groups = "drop")
         
#We use the tidyr library and pivote_wider to organise the data in a table with 3 columns
library(tidyr)

overlapping <- filtered_sales %>%
  pivot_wider(
    names_from = Category,
    values_from = Sales
  )

#To make sure we only take customers with products purchased in both categories, we run this
overlapping <- na.omit(overlapping)

#Now we can run the paired t-test
t.test(
  overlapping$Furniture,
  overlapping$Technology,
  paired=TRUE
)


t.test(Sales ~ Category, data = filtered_sales)

#Next we need to compare the mean of spend beteeen two customer segments - customer, corporate
unique(df$Segment) #checking if we need to filter the data
#Filtering the data
filtered_segment <- df %>%
  filter(Segment %in% c("Corporate", "Consumer")) %>%
  select(Segment, Sales)

head(filtered_segment) #validating the data was built correctly

#Running the t-test
t.test(Sales ~ Segment, data = filtered_segment)