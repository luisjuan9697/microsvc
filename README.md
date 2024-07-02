# DevSecOps Pipeline on AWS

## Introduction

This project demonstrates setting up a DevSecOps pipeline for deploying a three-tier application on AWS. The focus is on creating a CI/CD pipeline, enhancing observability, and ensuring high availability using Docker, Jenkins, AWS, Terraform, and Kubernetes.

## Objectives

- Implement a CI/CD pipeline from commit to production.
- Improve application observability for quick debugging.
- Deploy the application with high availability and no downtime.

## Prerequisites

- AWS account
- Basic knowledge of Docker, Jenkins, AWS, Terraform, and Kubernetes
- Access to the source repository:

## Solution Architecture

1. **IAM User Setup**: Create an IAM user with `AdministratorAccess` for deployment.
2. **Infrastructure as Code**: Use Terraform to provision an EC2 instance for the Jenkins server.
3. **Jenkins Configuration**: Install Jenkins, Docker, SonarQube, Terraform, Kubectl, AWS CLI, and Trivy on the EC2 instance.
4. **EKS Cluster**: Deploy an Amazon EKS cluster using `eksctl` with 2-3 nodes.
5. **Load Balancer**: Set up AWS Application Load Balancer (ALB) for the EKS cluster.
6. **ECR Repositories**: Create private repositories on Amazon ECR for Docker images.
7. **ArgoCD**: Install ArgoCD for continuous delivery and GitOps in the cluster.
8. **SonarQube**: Integrate SonarQube on Jenkins for code quality analysis.
9. **Trivy Helm Chart**: Install the Trivy Helm Chart in the EKS cluster for Kubernetes cluster scanning.
10. **OWASP Dependency Check**: Integrate OWASP Dependency Check in Jenkins for dependency vulnerability scanning.
11. **Blue-Green Deployment**: Implement blue-green deployment strategy using ArgoCD and AWS ALB.
12. **Multi-AZ Deployment**: Ensure the EKS cluster spans multiple Availability Zones (AZs) for resilience and high availability.
13. **Auto-Scaling**: Configure Kubernetes Cluster Autoscaler and Horizontal Pod Autoscaler (HPA) to manage workloads based on demand.
14. **Jenkins Pipelines**: Develop pipelines for building, scanning, and deploying code to EKS.
15. **Security**: Enforce security best practices, including network policies, IAM roles, and secrets management.
16. **Monitoring Setup**: Install Prometheus and Grafana using Helm for monitoring the EKS cluster.
17. **Application Deployment**: Use ArgoCD to deploy a stateless application to EKS.

## Implementation

### Step 1: Create an IAM User and Generate AWS Access Key

```sh
# Create an IAM user with AdministratorAccess
aws iam create-user --user-name <username>
aws iam attach-user-policy --user-name <username> --policy-arn arn:aws:iam::aws:policy/AdministratorAccess
aws iam create-access-key --user-name <username>
```

![alt tag](https://github.com/luisjuan9697/microsvc/blob/main/assets/awsSolution.png)
