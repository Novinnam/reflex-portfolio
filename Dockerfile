# Use official miniconda base image
FROM continuumio/miniconda3

# Set working directory
WORKDIR /app

# Copy your local environment.yml or requirements.txt to container
COPY environment.yml .

# Create conda environment from environment.yml and activate it
RUN conda env create -f environment.yml

# Make RUN commands use the new environment:
SHELL ["conda", "run", "-n", "web_reflex", "/bin/bash", "-c"]

# Alternatively, if you don't have environment.yml but just requirements.txt:
# RUN conda create -n web_reflex python=3.13 -y && \
#     conda run -n web_reflex pip install -r requirements.txt

# Copy app code into container
COPY . .

# Set environment variable for conda environment activation (optional)
ENV PATH /opt/conda/envs/web_reflex/bin:$PATH

# Expose port (change according to your app)
EXPOSE 8000

# Run your reflex app (adjust command as needed)
CMD ["conda", "run", "-n", "web_reflex", "reflex", "run", "--no-browser", "--port", "8000"]
