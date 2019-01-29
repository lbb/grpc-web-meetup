//go:generate ./gen.sh
package main

import (
	pb "github.com/lbb/git/grpc-web-meetup/add"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"log"
	"net"
)

type server struct{}

func (*server) Add(ctx context.Context, req *pb.AddRequest) (*pb.AddResponse, error) {
	log.Println("Going to add two numbers")
	return &pb.AddResponse{
		Sum: req.A + req.B,
	}, nil
}

func main() {
	socket, err := net.Listen("tcp", ":9999")
	log.Println("Started to listen on :9999")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterAddServiceServer(s, &server{})
	log.Println("Started grpc server")
	if err := s.Serve(socket); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
