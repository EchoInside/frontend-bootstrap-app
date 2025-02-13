variable "aws_region" {
  description = "Region AWS, w którym działa infrastruktura"
  type        = string
  default     = "us-east-1"
}

variable "s3_bucket_name" {
  description = "Nazwa bucketu S3 do przechowywania obrazków"
  type        = string
  default     = "my-image-cdn-bucket"
}
