#Unit 7 Activities

#Since it's a .sav, which is an SPSS file type, we need to use the package 'haven'
install.packages("haven")
library(haven)
health_data <-read_sav("health-data.sav")
View(health_data)

#normality testing - null hypothesis is that the data is normally distributed
#Using the Shapiro test on an example - sbp (Systolic Blood Pressure)
shapiro.test(health_data$sbp)

#Running a one sample t-test
res <-t.test(health_data$dbp, mu=80)
print(res)

#The above is a two-sided test, which is the default. If we want to test bigger/smaller, we would do the following
#This one is checking if H0:μ≤80, and therefor H1 would be > than 80
res_bigger <-t.test(health_data$dbp, mu=80, alternative = "greater")
print(res_bigger)

#This one is checking if H0:μ≥80, and therefor H1 would be < than 80
res_less <-t.test(health_data$dbp, mu=80, alternative = "less")
print(res_less)

#From the results we received in the tests above we learn that the mean is bigger than 80.

#---------------------------------#

#Moving on to Independent t-test, using the variables age and diabetes
t.test(age~diabetes, data = health_data, var.equal=TRUE, alternative="less")

#Moving on to Paired t-test
#Before we start, we need to convert the variables pre-rest score to 'before' and post_test score to 'after
#This improves readability
before <-(health_data$pre_test)
after<-(health_data$post_test)

#Now we run the test
res_paired <-t.test(before,after,paired=TRUE)
print(res_paired)

#Running an ANOVA/F-Test
#We'll look for a connection between income and religion. 
#There are multiple levels of categories under religion, which is why we need the ANOVA test
res.aov <-aov(income~religion_2, data=health_data)
summary(res.aov)

#The output received shows that R sees only 2 categories. 
#Running the commands below we learn there are 4 categories and that they are treated as numeric variables
table(health_data$religion_2)
class(health_data$religion_2)

#We'll convert to categorical data before running the F-test again
health_data$religion_2 <- as.factor(health_data$religion_2)
class(health_data$religion_2)

#--------------------------------#

#Formative task 5
#Find out mean, median and mode of variables sbp, dbp and income
mean(health_data$sbp)
mean(health_data$dbp)
mean(health_data$income)

summary(health_data$income)
fivenum(health_data$income)
boxplot(health_data$income, main = "Boxplot of Income", ylab = "Income")

#Associatioin between systolic blood pressure and peptic ulcer
shapiro.test()
hist(health_data$sbp) #histogram confirms this and shows the data is skewed right
hyp_1 <- t.test(health_data$sbp~health_data$pepticulcer)
print(hyp_1)

#-----------------------------#
#Unit 8 activities
#Scale parameters - find mean, median and mode of 'age'
#1. This gives median and mean
summary(health_data$age)

#Output:
#Min. 1st Qu.  Median    Mean 3rd Qu.    Max. 
#6.00   21.00   27.00   26.51   32.00   45.00 

#2. R doesn't have a built in function for mode, but we can create our own function for it:
as.numeric(
  names(
    sort(-table(health_data$age), decreasing = TRUE)
    )[1]
  )
#Output: 10

#Find out if the median of dbp is the ssame among diabetic and non-diabetic participants
#To decide if we need a parametric or nonparametric test, we first run the shapiro test on the numerical variable - dbp
shapiro.test(health_data$dbp)

#Output:
#Shapiro-Wilk normality test
#data:  health_data$sbp
#W = 0.95474, p-value = 3.345e-06
#So we learn that the data isn't normally distributed, given p-value is much smaller than 0.05

#Given that, we continue with a nonparametric test:
wilcox.test(dbp ~ diabetes, data = health_data)
#Output: 
#Wilcoxon rank sum test with continuity correction
#data:  dbp by diabetes
#W = 3804.5, p-value = 0.7999
#alternative hypothesis: true location shift is not equal to 0
#Interpretation: We fail to reject the null hypothesis; 
#there is insufficient evidence that DBP differs in location/median between diabetic and non-diabetic participants.

#------------------------#
#If we would want to compare means between 2 groups of continuous numerical data, we could use the t-test
t.test(dbp ~ diabetes, data = health_data)
#Output:
#Welch Two Sample t-test
# data:  dbp by diabetes
#t = -0.16649, df = 82.075, p-value = 0.8682
#alternative hypothesis: true difference in means between group 1 and group 2 is not equal to 0
#95 percent confidence interval:
#  -3.845226  3.251287
#sample estimates:
#  mean in group 1 mean in group 2 
#82.53333        82.83030 
#Which means we failed to find evidence that the dbp mean differ between groups

#----------------------------------#
#Moving to the next task, we need to find out whether sbp differ across occupational groups
#Looking at the data we learn that sbp is a continuous numerical variable and Occupation is a categorical variable


#To help determine which type of test we need, we start with a normality test
shapiro.test(health_data$sbp)

#The Shapiro test showed sbp isn't normally distributed
#For comparison purposes, we'll run both parametric nonparametric tests

#Investigating the categorical variable - Occupation - to dermine which tests to run
class(health_data$occupation)
unique(health_data$occupation)

#Output: "haven_labelled" "vctrs_vctr"     "double" and 4 groups, which means we expect df value = 3
#Given we have more than 2 groups, and we're comparing them to a continuous numerical variable,
#we'll use the ANOVA (parametric) and Kruskal (nonparametric) tests
#We first ensure the categorical variable matches the expected class of these tests

library(haven)
health_data$occupation <- as.factor(health_data$occupation)

#Next, we run the ANOVA test
res <- aov(sbp ~ occupation, data = health_data)
summary(res)

#Output:
#            Df    Sum Sq.  Mean Sq  F value  Pr(>F)
#occupation  3     285      94.9     0.233    0.873
#Residuals   206   83800    406.8    
#Since the p-value is 0.617, which is greater than 0.05, we fail to reject the null hypothesis. 
#There is insufficient evidence that mean SBP differs across occupation groups.


#Next, we run the Kruskal test
kruskal.test(sbp ~ occupation, data = health_data)

#Output:
#Kruskal-Wallis rank sum test
#data:  sbp by occupation
#Kruskal-Wallis chi-squared = 0.77906, df = 3, p-value = 0.8545
#The p-value of the Kruskal test is very similar to the ANOVA one, supporting the same earlier conclusion