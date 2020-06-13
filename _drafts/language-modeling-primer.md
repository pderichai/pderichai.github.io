---
title: Language Modeling Primer
date: 2020-05-30
subtitle: What is language modeling, how does it relate to neural networks, and
  why is it so important today?
layout: blog
---

## Preliminaries

Vocabulary: $$\mathcal{V}$$

Language modeling is the task of assigning a probability to a piece of text.
Let $$\vec{x}$$ be a sequence of tokens $$\langle x_1, x_2, ... \rangle$$ where
$$x_i \in \mathcal{V}$$.
