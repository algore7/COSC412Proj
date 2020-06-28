from django.db import models

# Trivia question
class Question(models.Model):
    question = models.CharField(max_length=100)
    answer = models.CharField(max_length=100)
    falseAnswers = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.question}: {self.answer}"