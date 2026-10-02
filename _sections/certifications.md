---
title: Certifications
slug: certs
order: 3
---


<div class="certs-container">
    {% for certs in site.section-certs %} 
        <a href = "{{ certs.coursecert }}" target="_blank" rel="noopener">
        <article class="certs-card">
            <div class="certs-date"> {{ certs.date | date:"%b %Y"}}</div>
            <div class="certs-main">
                <div class="certs-name">{{ certs.name }}</div>
                <div class="certs-des">{{ certs.description }}</div>
                <div class ="certs-links">
                    <a href ="{{ certs.courseurl }}"><img src="https://davidphoonzy.github.io/cv/assets/img/link.png">Course</a>
                    <a href ="{{ certs.coursecert }}"><img src="https://davidphoonzy.github.io/cv/assets/img/link.png">Cert</a>
                    <a href ="{{ certs.courselinkedin }}"><img src="https://davidphoonzy.github.io/cv/assets/img/link.png">LinkedIn</a>
                </div> 
                <div class="certs-tools">
                    {% for tool in certs.tools %}
                        <span class="certs-pill">{{ tool }}</span>
                    {% endfor %}
                </div>

            </div>
        </article>
        </a>
    {% endfor %}
 </div>

